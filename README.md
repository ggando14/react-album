# Getting Started with React Favorite Album 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Project uses react to show the albums of my favorite artist.   

App uses iTunes API and display the albums on a React Page.  For each album you will see:
- Artist Name
- Album Name
- Year Released
- Album Art
- Number of Songs

## How to install

Just clone and install dependencies 

```
npm install
```
then run
```
npm start
```
or
```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Notes

- There are no options to change artist in current release, but it can be changed on the App.js file modifying the iTunes api request  
``https://itunes.apple.com/search?term=``**Maroon+5**``&media=music&entity=album&limit=200``
- iTunes API does not provide artist images.  artist image is decorative for now.



