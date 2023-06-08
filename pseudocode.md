#START
#RENEDER


Display content on the screen, based on current state


#INIT
1.  READ currentPage (pages [0])
2.  INIT pages arr
3. Header
    * displays text with instructions for user

4. GO button
    * allows user to start the game (change state)
  
5. p
    * displays subtext (examples, and instructions for use of the page)

6. NEXT button
    * allows user to move to next page (change state)
 
7. RETURN button
    * allows user to return to inital page value
    
8. OBJECTS array
    * array of objects, containing new page content to displayed on click of next, go or return (array should contain new infromation for the page ie. h1, p and buttons)   
    
9. SYMBOLS array(random)
    * array containing symbols to be assigned to number value  
   
10. MENU of numbers
    * an element containg a list of numbers 1-99 with corresponding symbol(random) to allow for checking of accuracy

#FUNTCIONS

    - RENDER HTML and CSS on page
    - EVENT LISTENER button to naviagte pages
      - start/go
      - next
      - return
    - SET STATE, upon button press display new object from objects array
    - GENERATE symbols (random) randomly assign symbols to numbers
        - if %9 then same symbol
        - else random symbol
 
#START PROGRAM

    - RENDER page 0
    - ON start/go button press move to page 1 (pull next object from array
    - IF 'NEXT' button press display page +1
    - IF 'RETURN' button press display page 0


#END PROGRAM


      
    
