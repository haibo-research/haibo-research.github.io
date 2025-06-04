// Functions.

function render_project(project_name,
    figure_path,
    title_name,
    author_list,
    material_list,
    award1_name=null,
    award2_name=null,
    description_content=null) {
if (document.getElementsByName(project_name).length === 0) {
return;
}

var img = document.createElement('img');
img.src = figure_path;
img.setAttribute('style',
 'width: 100%; max-height: 100px; object-fit: cover;');

var title = document.createElement('div');
title.setAttribute('class', 'title');
title.innerHTML = title_name;

var author = document.createElement('div');
author.setAttribute('class', 'author');
author.innerHTML = '';
for (var idx = 0; idx < author_list.length; idx++) {
if (idx < author_list.length - 1 &&
(author_list[idx + 1] == 'equal' ||
author_list[idx + 1] == 'corresponding')) {
author.innerHTML += (
'<span name="' +
author_list[idx] +
'" title="' +
author_list[idx + 1] +
'"></span>');
idx++
} else {
author.innerHTML += (
'<span name="' +
author_list[idx] +
'" title="' +
'"></span>');
}
if (idx < author_list.length - 1) {
author.innerHTML += ', ';
}
}

var material = document.createElement('div');
material.setAttribute('class', 'material');
material_list.innerHTML = '';
for (var idx = 0; idx < material_list.length; idx++) {
material.innerHTML += (
'<a href="' +
material_list[idx][1] +
'" target="_blank">' +
material_list[idx][0] +
'</a>');
if (idx < material_list.length - 1) {
material.innerHTML += ' | ';
}
}

if (award1_name) {
var award1 = document.createElement('div');
award1.setAttribute('class', 'award1');
award1.innerHTML = award1_name;
}

if (award2_name) {
    var award2 = document.createElement('div');
    award2.setAttribute('class', 'award2');
    award2.innerHTML = award2_name;
    }

if (description_content) {
    var description = document.createElement('div');
    description.setAttribute('class', 'description');
    description.innerHTML = description_content;
    }

var row = document.getElementsByName(project_name)[0];
var cell = row.insertCell(0);
cell.setAttribute('width', '25%');
cell.appendChild(img);
cell = row.insertCell(1);
cell.appendChild(title);
cell.appendChild(author);
cell.appendChild(material);
if (award1_name) {
cell.appendChild(award1);
};
if (award2_name) {
cell.appendChild(award2);
}
};

function render_author(author_name, link=null, alias=null) {
var list = document.getElementsByName(author_name);
for (var idx = 0; idx < list.length; idx++) {
var contribution = list[idx].title;
var tailing = '';
if (contribution === 'equal') {
tailing = '*';
} else if (contribution === 'corresponding') {
tailing = '<sup>+<sup>';
}

var context = ''
if (alias) {
context = alias + tailing;
} else {
context = author_name + tailing;
}

if (link) {
list[idx].innerHTML = (
'<a href="' +
link +
'" target="_blank">' +
context +
'</a>');
} else {
list[idx].innerHTML = context;
}

if (author_name === 'Yuze He') {
list[idx].setAttribute('class', 'me')
}
}
};










// Template.

render_project(
project_name='template',
figure_path='images/',
title_name='',
author_list=[
'',
],
material_list=[
['Paper', ''],
['Teaser', ''],
['Slides', ''],
['Code', ''],
['Dataset', ''],
['Demo', ''],
],
award1_name=null,
award2_name=null,
description_content=null,
);










// Projects.
// render_project(
//     project_name='aLiDAR',
//     figure_path='images/aLiDAR.jpg',
//     title_name='&alpha;LiDAR: An Adaptive High-Resolution Panoramic LiDAR System',
//     author_list=[
//     'Jiahe Cui', 'equal',
//     'Yuze He', 'equal',
//     'Jianwei Niu',
//     'Zhenchao Ouyang',
//     'Guoliang Xing',
//     ],
//     material_list=[
//     ['Demo', ' https://youtu.be/x4zc_I_xTaw'],
//     ],
//     award1_name=null,
//     award2_name=null,
//     description_content=null,
//     );

render_project(
    project_name='VI-Map',
    figure_path='images/vimap1.mov',
    title_name='VI-Map: Infrastructure-Assisted Real-Time HD Mapping for Autonomous Driving',
    author_list=[
    'Yuze He', 
    'Chen Bian', 
    'Jingfei Xia', 
    'Shuyao Shi', 
    'Zhenyu Yan', 
    'Qun Song', 
    'Guoliang Xing', 
    ],
    material_list=[
    ['MobiCom 2023', 'https://dl.acm.org/doi/abs/10.1145/3570361.3613280'],
    ['Demo', 'https://www.youtube.com/watch?v=p2RO65R5Ezg&t=4s'],
    ['Code', 'https://github.com/yuzehh/VI-Map'],
    ['Dataset', 'https://github.com/yuzehh/CARLA-Dataset-Creation'],
    ],
    award1_name="🏆MobiCom 2023 Best Community Contribution Award (2/377)",
    award2_name="🏅Gold Prize at the 49th International Exhibition of Inventions Geneva",
    description_content="VI-Map is the first system that leverages roadside infrastructure to enhance real-time HD map construction for autonomous driving.",
    );

render_project(
    project_name='AutoMatch',
    figure_path='images/automatch.gif',
    title_name='AutoMatch: Leveraging Traffic Camera to Improve Perception and Localization of Autonomous Vehicles',
    author_list=[
    'Yuze He',
    'Li Ma', 
    'Jiahe Cui',
    'Zhenyu Yan',
    'Guoliang Xing', 
    'Sen Wang', 
    'Qintao Hu', 
    'Chen Pan', 
    ],
    material_list=[
    ['SenSys 2022', 'https://dl.acm.org/doi/abs/10.1145/3560905.3568519'],
    ['Slides', 'https://docs.google.com/presentation/d/1jHNdxwvrZgbOQABaElAjVCxM9QP9ExZq/edit?usp=sharing&ouid=105439115813761246402&rtpof=true&sd=true'],
    ],
    award_name1=null,
    award_name2=null,
    description_content="AutoMatch exploits existing ubiquitous traffic cameras to assist perception and localization in autonomous driving.",
    );

render_project(
project_name='VI-Eye',
figure_path='images/vieye.gif',
title_name='VI-Eye: Semantic-based 3D Point Cloud Registration for Infrastructure-assisted Autonomous Driving',
author_list=[
"Yuze He", 
"Li Ma",
"Zhehao Jiang", 
"Yi Tang", 
"Guoliang Xing",
],
material_list=[
['MobiCom 2021', 'https://dl.acm.org/doi/10.1145/3447993.3483276'],
['Teaser', 'https://www.youtube.com/watch?v=IYu8d8Rzy2s'],
['Slides', 'https://docs.google.com/presentation/d/1XvCcihCw_QwEhLiFPr62qV-a2tN3rzXj/edit?usp=sharing&ouid=105439115813761246402&rtpof=true&sd=true'],
],
award1_name=null,
award2_name=null,
description_content="VI-Eye combines the infrastructure LiDAR point cloud with the autonomous vehicle's LiDAR point cloud, fundamentally boosting vehicle's 3D perception.",
);







// Authors.

render_author('Yuze He', 'https://yuzehh.github.io/homepage/');
render_author('Li Ma', 'https://limacv.github.io/homepage/');
render_author('Guoliang Xing', 'https://staff.ie.cuhk.edu.hk/~glxing/');
render_author('Zhenyu Yan', 'https://yanzhenyu.com/');
render_author('Qun Song', 'https://song-qun.github.io/');
