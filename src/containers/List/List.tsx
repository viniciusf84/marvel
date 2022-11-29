import { useEffect, useCallback, useContext } from "react";
import { getComicsData } from "../../services";

import ListItem from "../../components/ListItem";
import LoadingContent from "../../components/LoadingContent";
import Button from "../../components/Button";

import { FilterContext } from "../../contexts/FilterContext";

import styles from "./List.module.css";

export function List() {
  const filterContext = useContext(FilterContext);

  const { isLoading, comicsData, offset, filters } = filterContext;
  const { setIsLoading, setComicsData, setOffset } = filterContext.actions;

  const getComics = useCallback(async (offset: Number, params: null) => {
    setIsLoading(true);

    try {
      const comics = await getComicsData(offset, params);

      setComicsData(comics);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  const displayComics = useCallback(() => {
    if (!isLoading && !comicsData.length) {
      return (
        <div className="empty">
          <p>Sorry, there is no result for your search.</p>
        </div>
      );
    }

    return comicsData.map((comic) => {
      const writers = comic.creators.items.filter(
        (item) => item.role === "writer"
      );

      return (
        <ListItem
          key={comic.id}
          src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
          title={comic.title}
          creators={writers.map((item) => item.name.split(" ")[1])}
        />
      );
    });
  }, [comicsData, isLoading]);

  useEffect(() => {
    getComics(offset, filters);
  }, [offset]);

  return (
    <>
      <main className={styles.list}>{displayComics()}</main>

      {isLoading ? <LoadingContent text={"Loading..."} /> : null}

      {!isLoading && comicsData.length ? (
        <Button text="Load More" onClick={() => setOffset(comicsData.length)} />
      ) : null}
    </>
  );
}
