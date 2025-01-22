const form = document.querySelector('form')

// this use case will give empty value.
// const height =  parseInt(document.querySelector('#height').value)


form.addEventListener('submit',function(e){
  e.preventDefault()
  const height =  parseInt(document.querySelector('#height').value)
  const weight =  parseInt(document.querySelector('#weight').value)
  const results =  (document.querySelector('#results'))

if(height=='' && height<0 && isNaN(height)){
  results.innerHTML("please give valid height ")
}
 else if(weight=='' && weight<0 && isNaN(weight)){
  results.innerHTML("please give valid  weight")
} else{
  const bmi = (weight/((height*height)/10000)).toFixed(2)
  //show the results
  //results.innerHTML = `<span>${bmi}</span>`
  if(bmi>18.6){
    results.innerHTML = `<span>${bmi}</span><span>Under Weight</span>`
  } else if(bmi>18.6 && bmi<24.9){
    results.innerHTML = `<span>${bmi}</span><span>normal range</span>`
  }
  else {
    results.innerHTML = `<span>${bmi}</span><span>Over Weight</span>`
  }
}

});