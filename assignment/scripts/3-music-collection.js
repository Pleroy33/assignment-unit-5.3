console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
myCollection = [];
function addToCollection(collection, title, artist, yearPublished) {
  console.log('addToCollection is running');
  console.log('collection is : ', collection);
  console.log('album is : ', title);
  console.log('artist is : ', artist);
  console.log('yearPublished is :', yearPublished);

  newObject = {};
  newObject.title = title;
  newObject.artist = artist;
  newObject.yearPublished = yearPublished;
  collection.push(newObject);
  console.log(newObject);
  return newObject;
}


addToCollection(myCollection,'Reprise','Moby','2021');//
addToCollection(myCollection, 'Lets Go', 'Rancid','1994');
addToCollection(myCollection,'IV', 'badbadnotgood','2016');
addToCollection(myCollection,'Tape Deck Heart', 'Frank Turner & the Sleeping Souls', '2013');
addToCollection(myCollection, 'MICHAEL','Killer Mike','2023');
addToCollection(myCollection, 'Streetcore', 'Joe Strummer', '2003');
  

console.log('This is my collection', myCollection);//console logged my collection to test.

function showCollection(collection){
  for (i=0; i<collection.length; i++){
  console.log(collection[i].title + 'by ' + collection[i].artist + ' released ' + collection[i].yearPublished)
}}

showCollection(myCollection);

















//add 6 albums to myCollection array





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
