import api from "../api";

export default async function page() {
  const restaurants = await api.list();

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {restaurants.map((restaurant) => {
        return (
          <article key={restaurant.id}>
            <img
              className="rounded-md"
              src={restaurant.image}
              alt={restaurant.name}
            />
            <div className="flex justify-between my-4 items-center">
              <h1 className="text-xl font-bold">{restaurant.name}</h1>
              <div>
                <span>
                  ⭐ {restaurant.score}{" "}
                  <span className="opacity-75">({restaurant.score})</span>
                </span>
              </div>
            </div>
            <p>{restaurant.description}</p>
            <p className="text-">{restaurant.address}</p>
          </article>
        );
      })}
      );
    </section>
  );
}
