# mini-web-stuff
collection of tiny javascript utils

## LILJS
a tiny javascript util for basic dom manipulation

### usage: 

the most basic way to use is just like jQuery with the 'dom' namespace 

#### Refference selector:

     let elem = dom('selector');  

#### Add Class to element:

     dom('selector').aC('new-class'); 

#### Remove Class from element:

     dom('selector').rC('new-class'); 
    
#### Callback on each element:

      dom('selector').each(function('selector') {
        // callback function body
      }

## more lil utils to come (??)
