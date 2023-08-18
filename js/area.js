function calculateTriangleArea (){
   // get triangle base value
   const baseField = document.getElementById('Triangle-base');
   const baseValueText = baseField.value;
   const base = parseFloat(baseValueText);
   baseField.value='';
   console.log(base);
  
   // get triangle height value

   const heightField = document.getElementById('Triangle-hight');
   const hightValueText = heightField.value;
   const hight = parseFloat( hightValueText);
   console.log (hight);

    heightField.value='';

   const area = 0.5 * base * hight ;
   console.log(area); 
    // show triangle area

    const areaSpan = document.getElementById('Triangle-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Triangle', area)

};

function calculateRectangleArea (){
    // get Rectangle width 
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    widthField.value='';
    console.log(width);

     // get Rectangle length
     const lengthField = document.getElementById('rectangle-length');
     const lengthValueText = lengthField.value;
     const length = parseFloat(lengthValueText);
     lengthField.value='';
     console.log(length);

      //  validate input

      if(isNaN(width)|| isNaN(length)){
        alert('Please insert a number');
        return;
      }

      // Calculate area

      const area = width * length;
      console.log(area);

      
   // show triangle area
  const areaSpan = document.getElementById('rectangle-area');
  areaSpan.innerText = area;

  addToCalculationEntry('rectangle', area)

};

 // Reusable function ---- reduce duplicate code

 function calculateParallelogramArea(){
      const base = getInputValue ('Parallelogram-base');
      console.log(base);
      const height = getInputValue ('Parallelogram-height');
      console.log(height);

       // validate
       if(isNaN(base)|| isNaN(height)){
        alert('Please insert a number')
        return;
       }

       // // Calculate area
       const area = base * height;
       setElementInnerText('Parallelogram-area',area);

        // add to calculation entry
        addToCalculationEntry('Parallelogram', area)

 };


 function calculateEllipseArea(){
     const majorRadius = getInputValue('ellipse-major-radius');
     const minorRadius = getInputValue('ellipse-minor-radius');
     const area = 3.14 * majorRadius * minorRadius;
     setElementInnerText ('ellipse-area', area);

     addToCalculationEntry('ellipse', area)
 };


 // get reusable input field and number

 
 function getInputValue(fieldId){
      const inputField = document.getElementById(fieldId);
      const inputValueText = inputField.value;
      const value = parseFloat(inputValueText);
      return value;

      
 };

  // reusable set span div etc
  function setElementInnerText (elementId, area){
            const element = document.getElementById(elementId);
            element.innerText = area;
  };

   // add to calculation entry

   function addToCalculationEntry(areaType, area){
      console.log(areaType+ ' ' +area)
      const CalculationEntry = document.getElementById('calculation-entry');

      const count = CalculationEntry.childElementCount

      const p= document.createElement('p')
      p.classList.add('my-3');
      p.innerHTML = `
       ${count}. ${areaType} ${area} cm<sup>2</sup> <button class= "btn btn-sm btn-success" >Convert</button>
      
      `;
      CalculationEntry.appendChild(p);
   }; 

