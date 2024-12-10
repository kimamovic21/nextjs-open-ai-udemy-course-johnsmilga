const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const DrinksPage = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <h2 className='text-7xl'>
        Drinks Page
      </h2>
    </div>
  );
};

export default DrinksPage;