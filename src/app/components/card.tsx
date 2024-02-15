import Link from "next/link";

interface cardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  score: number;
  ratings: number;
}

const card: React.FC<cardProps> = ({
  id,
  name,
  image,
  description,
  score,
  ratings,
}) => {

  return (
    <article>
      <img
        alt={name}
        className="mb-3 h-[300px] w-full object-cover"
        src={image}
      />
      <h2 className="inline-flex gap-2 text-lg font-bold">
        <Link href={`/${id}`}>
          <h1>{name}</h1>
        </Link>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{score}</span>
          <span className="font-normal opacity-75">({ratings})</span>
        </small>
      </h2>

      <p className="opacity-90">{description}</p>
    </article>
  );
};

export default card;
