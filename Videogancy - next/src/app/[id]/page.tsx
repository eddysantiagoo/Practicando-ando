import api from "@/api";
import Card from "../components/card";
import Link from "next/link";


export async function generateMetadata({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id);

  return {
    title: `${restaurant.name} - Restaurancy`,
    description: restaurant.description,
  };
}

export default async function RestaurantPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const restaurant = await api.fetch(id);

  return (
    <>
      <Link href="/">Regresar</Link>

      <Card
        id={restaurant.id}
        name={restaurant.name}
        image={restaurant.image}
        description={restaurant.description}
        score={restaurant.score}
        ratings={restaurant.ratings}
      />
    </>
  );
}
