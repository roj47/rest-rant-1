const React = require('react');
// Default template page
const Def = require('../default')

//Create index page using default page
function index (data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${place.id}`} >
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })

  return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className='place-rows'>
              {placesFormatted}
            </div>
        </main>
    </Def>
  )
}

module.exports = index;