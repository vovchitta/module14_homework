// Task 1

const parser = new DOMParser();

const xmlString = `
<list>
<student>
    <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
</student>
<student2>
    <name2 lang="ru">
        <first2>Петр</first2>
        <second2>Петров</second2>
    </name2>
    <age2>58</age2>
    <prof2>driver</prof2>
</student2>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const nameNode = listNode.querySelector("name");
const firsttNode = listNode.querySelector("first");
const secondNode = listNode.querySelector("second");
const ageNode = listNode.querySelector("age");
const profNode = listNode.querySelector("prof");
const langAttr = nameNode.getAttribute('lang');

const studentNode2 = listNode.querySelector("student2");
const nameNode2 = listNode.querySelector("name2");
const firsttNode2 = listNode.querySelector("first2");
const secondNode2 = listNode.querySelector("second2");
const ageNode2 = listNode.querySelector("age2");
const profNode2 = listNode.querySelector("prof2");
const langAttr2 = nameNode2.getAttribute('lang');

const firstStudent = {
    name: firsttNode.textContent + " " + secondNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr
};


const secondStudent = {
    name: firsttNode2.textContent + " " + secondNode2.textContent,
    age: Number(ageNode2.textContent),
    prof: profNode2.textContent,
    lang: langAttr2
};


const result = [
firstStudent,
secondStudent,
];

console.log('list:', result);