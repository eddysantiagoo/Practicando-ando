import api from "../api";
import Card from "./components/card";
import SearchBox from "./components/SearchBox";

export default async function page({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const restaurants = await api.search(searchParams.q);
  const image = await api.fetchDogImage();

  return (
    <>
      <SearchBox />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => {
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
          })
        ) : (
          <div className="m-auto">
            No encontramos lo que buscas:( 
            <img width={400} src="https://images.squarespace-cdn.com/content/v1/5f071e67133a487a834f112a/1605183347914-O4E2G9DS8ABKGT63ADKX/confused.gif" alt="dog" />
          </div>
        )}
      </section>
    </>
  );
}
