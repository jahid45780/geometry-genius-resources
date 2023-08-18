function calculateTriangleArea (){
   // get triangle base value
   const baseField = document.getElementById('Triangle-base');
   const baseValueText = baseField.value;
   const base = parseFloat(baseValueText);
   console.log(base);
  
   // get triangle height value

   const heightField = document.getElementById('Triangle-hight');
   const hightValueText = heightField.value;
   const hight = parseFloat( hightValueText);
   console.log (hight);


   const area = 0.5 * base * hight ;
   console.log(area); 
    // show triangle area

    const areaSpan = document.getElementById('Triangle-area');
    areaSpan.innerText = area;

};

function calculateRectangleArea (){
    // get Rectangle width 
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

     // get Rectangle length
     const lengthField = document.getElementById('rectangle-length');
     const lengthValueText = lengthField.value;
     const length = parseFloat(lengthValueText);
     console.log(length);

      // Calculate area

      const area = width * length;
      console.log(area);

      
   // show triangle area
  const areaSpan = document.getElementById('rectangle-area');
  areaSpan.innerText = area;



};

 // Reusable function ---- reduce duplicate code

 function calculateParallelogramArea(){
      const base = getInputValue ('Parallelogram-base');
      console.log(base);
      const height = getInputValue ('Parallelogram-height');
      console.log(height);

       // // Calculate area
       const area = base * height;
       setElementInnerText('Parallelogram-area',area);
 };


 function calculateEllipseArea(){
     const majorRadius = getInputValue('ellipse-major-radius');
     const minorRadius = getInputValue('ellipse-minor-radius');
     const area = 3.14 * majorRadius * minorRadius;
     setElementInnerText ('ellipse-area', area);
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

   // data validate

   