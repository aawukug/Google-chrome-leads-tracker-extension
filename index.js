let myleadsArr = [];

const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

const tabBtn = document.getElementById("tab-btn");

const deleteBtn = document.getElementById("delete-btn");

const ulEl = document.getElementById("ul-el");

const leadsFromLocalStorage = JSON.parse ( localStorage.getItem("myLeads") );

if (leadsFromLocalStorage) {
    myleadsArr = leadsFromLocalStorage;
    render(myleadsArr);
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myleadsArr.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myleadsArr) )
        render(myleadsArr)
    });
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myleadsArr = [];
    render(myleadsArr)
})

inputBtn.addEventListener("click", function() {
    myleadsArr.push(inputEl.value)
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myleadsArr))
    render(myleadsArr);
});

dle

function render (leadsArr) {
    let listItems = "";
    for ( let i = 0; i < leadsArr.length; i++){
        listItems += 
        `<li>
            <a href="${leadsArr[i]}" target = "_blank">
                ${leadsArr[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems;
}