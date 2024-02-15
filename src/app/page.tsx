import api from "../api";
import Card from "./components/card";
import SearchBox from "./components/SearchBox";

export default async function page({searchParams} : {searchParams: {q: string}}){
  const restaurants = await api.search(searchParams.q);

  return (
    <>
      <SearchBox />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => {
          return (
            <Card
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              image={restaurant.image}
              description={restaurant.description}
              score={restaurant.score}
              ratings={restaurant.ratings}
            />
          );
        })}
      </section>
    </>
  );
}
