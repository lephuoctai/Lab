const getStudentID = document.querySelector('.StudentID');
const Student = Array(100).fill(0);

document.querySelector('button#Send').addEventListener('click', () => {
    let ID = getStudentID.value;
    console.log(ID);

    if(Student[ID] == 1)
    {
        alert("Da ton tai!");
    }
    else
    {
        Student[ID] = 1;
        alert("Them thanh cong!");
    }
})