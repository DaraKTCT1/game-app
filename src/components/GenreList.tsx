import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((g) => (
        <li>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
