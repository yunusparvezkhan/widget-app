## Standard Version Notations

### On Version Release

`Version [Version number] Release`

### On Patch/fix/changes (minor/major)


`Patch [Version index].[patch index]`

### Development Phase commits


`v[version number that is currently being developed] Delta [index of major changes, ie. Component additions].[index of small changes following the major change].`

`Example`  => `v4 Delta 1.8`

 This Commit title represents that Version 4 is in Development right now, and in the development process so far, one major change have been commited and follwing that change 8 small changes have been commited.

 Following any update, if any very minor change is commited, such as spelling mistakes or something mistekenly forgotten, then that commit might have a index following a . (dot) after the version number.

 `Example` => `v4 Delta 2.1.1`

 This commit suggests that some very small change is commited following the  `v4 Delta 2.1`  commit.

### On Devnotes update

`v[version under development] echo mic [index of devnotes update]`

`Example` => `v4 echo mic 1`

This Commit title repressents that while Version 4 of the app is in Development phase, devnotes is updated for some announcement/notification and the index of such announcement/notification is 1.

### On Readme.md update

`Readme update v[version currently under development] n[index of readme update] ` => **Used Currently**

Previously this type of commits are done as 

`README update v[version currently under development] #[index of readme update] `

Note:- The first Notation is used currently

then as the extended description 

`some description`

## Version 1 
Version 1 of the widget app contains a list of accordions of Srimad Bhagavatam Slokas. Whenever a title is clicked, the sloka expands from below. Whenever any other title is clicked, that sloka expands and previously opened sloka shrinks. When an open sloka's title is clicked, the sloka shrinks back.

## Version 2
Version 2 of the widget app contains a decent and basic navigation bar, to hover to accordion page and search page. The accordion page contains all the previous version's functionality and the search page contains a search bar and no submit button. Whenever user types some keyword on the searchbar and stops typing for 300ms, the app sends a request to the wikipedia api and gets back a object as result. A array inside that object contains the titles and description (aka snippet). The title and snippets are displayed in the page in the form of a list using map method. The snippet prop of the object contains html, hence that is displayed using the dangerouslySetInnerHTML prop of jsx span tag. At last a anchor tag is added with some style to route the user to the actual wikipedia page.

## Version 3
Version 3 of the widget app contains another page called the Dropdown page. In this page user gets one dropdown menu, which if clicked indeed a dropdown menu appears. User then gets some color options to choose. According to user's selection, the box below the dropdown segment changes the color. Whenever the menu opens, the box goes down and unhides itself from the menu. Whenever the menu is open and the user clicks anywhere outside the form, the menu closes.

## Version 4
Version 4 of the widget app now contains another page called the Translate page. User can put any text in any language in the input field of this page and can select a language to see the put text's translation on that selected language. This widget is very straight forward, but usefull in a lot of sense.