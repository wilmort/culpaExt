fetch('./ids.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

var professors = document.querySelectorAll('.DataGridZ td:nth-child(3)');

function getJSON(professor) {
    return data.filter(
        function (data) {
            return data.name_SUBJ == professor;
        }
    );
}

var i;

for (i = 0; i < professors.length; ++i) {
    var prof_info = getJSON(professors[i].innerText);
    console.log(prof_info);
}



console.log(professors);