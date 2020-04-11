// google-news-in
// bbc-news
// news24
// the-times-of-india
// the-hindu
// cnn
// techradar
// techcrunch
// the-economist
// the-new-york-times
let source=`google-news-in`;

let apikey='8cb0f8f82d0045e2b96123e00715f730'

let newsAccordian=document.getElementById('accordionExample');
let card=document.getElementById('card')
const xhr=new XMLHttpRequest();

xhr.open('GET',`http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`,true)
xhr.onload=function() {
    if (this.status===200){

        let json=JSON.parse(this.responseText)
        let articles=json.articles;
        console.log(articles);
        
        let newshtml='';
        articles.forEach(function(element,index){
            let news=`<div class="col mb-4">
            <div class="card" id='card'>
              <img src="${element.urlToImage}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.content}</p>
                <a href="${element.url}" target='_blank' class="btn btn-primary">Read more...</a>
                </div>
            
              </div>
          </div>`
        
                                    newshtml+=news;                                    
    });
                    newsAccordian.innerHTML=newshtml;      
    }
    else{
        console.log('some error occured');
        }
}
xhr.send()
