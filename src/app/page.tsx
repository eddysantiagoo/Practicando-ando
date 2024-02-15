import api from "../api";
import Card from "./components/card";

export default async function page() {
  const restaurants = await api.list();

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {restaurants.map((restaurant) => {
        return (
          <Card
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
  );
}
