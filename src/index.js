import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';

cytoscape.use(coseBilkent);

import './style.css';
// webpack으로 묶어줘야 하니 css파일을 진입점인 index.js 에 import 합니다

// 아래는 공식 사이트에 올라와 있는 예제 코드입니다
const cy = cytoscape({

    container: document.getElementById('cy'), // container to render in

    elements: [ // list of graph elements to start with
    {"data": {
        "id": 'main',
        "url": 'https://wanttogetipad.p-e.kr/',
        "label": '메인'
     }
    },
    {"data": {
        "id": '1security',
        "url": 'reasonpagy',
        "label": '보안'
     }
    },   
     {"data": {
        "id": '2develope',
        "url": 'reasonpage',
        "label": '개발환경'
     }
    },
    {"data": {
        "id": '3comfortable',
        "url": 'https://wanttogetipad.p-e.kr/reasons/perform',
        "label": '성능'
     }
    },
    {"data": {
        "id": 'etc',
        "url": 'da',
        "label": '기타'
     }
    },
        { // edge ab
            "data": { "id": 'ab', "source": 'main', "target": '1security' }
        }, { // edge ab
            "data": { "id": 'aljb', "source": 'main', "target": '2develope' }
        }, { // edge ab
            "data": { "id": 'ajhgb', "source": 'main', "target": '3comfortable' }
        }, { // edge ab
            "data": { "id": 'hgab', "source": 'main', "target": 'etc' }
        },
    ],

    style: [ // the stylesheet for the graph
        {
            selector: 'node',
            style: {
                'background-color': '#666',
                'label': 'data(label)'
            }
        },

        {
            selector: 'edge',
            style: {
                'width': 3,
                'curve-style': 'bezier',
              //
                'line-color': '#ccc',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'vee'
            }
        }
    ],

    layout: {
        name: 'cose-bilkent',
        animate: false,
        gravityRangeCompound: 1.5,
        fit: true,
        tile: true
    }
	//

});
cy.on('tap', function (e) {
    const url = e.target.data('url')
    if (url && url !== '') {
        window.open(url);
	cy.maxZoom(0.7)
    }
});

// 추가되는 부분                                              
let resizeTimer;

window.addEventListener('resize', function () {
    this.clearTimeout(resizeTimer);
    resizeTimer = this.setTimeout(function(){
        cy.fit();
    },200);
});
