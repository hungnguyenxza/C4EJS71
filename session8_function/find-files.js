let images = {
    "name": "images",
    "isFolder": true,
    "content": [
        {
            "name": "background.jpg",
            "isFolder": false,
            "content": []
        },
        {
            "name": "forceground.jpg",
            "isFolder": false,
            "content": []
        },
        {
            "name": "my travel",
            "isFolder": true,
            "content": [
                {
                    "name": "ha noi",
                    "isFolder": true,
                    "content": [
                        {
                            "name": "pho-co.jpg",
                            "isFolder": false,
                            "content": []
                        },
                        {
                            "name": "ho-guom.jpg",
                            "isFolder": false,
                            "content": []
                        }
                    ]
                },
                {
                    "name": "check-in.jpg",
                    "isFolder": false,
                    "content": []
                }
            ]
        }
    ]
}

function find_files(object, keyWord) {
    if (object.isFolder === false) {
        if (object.name.search(keyWord) >= 0) {
            console.log(object.name);
        }
    } else {
        for (const childObject of object.content) {
            find_files(childObject, keyWord);
        }
    }
}
find_files(images, "b");

let keyWord = "c";
let allFileAndFolders = [];
allFileAndFolders.push(images);

while (allFileAndFolders.length > 0) {
    let object = allFileAndFolders.shift();
    if (!object.isFolder) {
        if (object.name.includes(keyWord)) {
            console.log(object.name);
        }
    }
    else {
        allFileAndFolders.push(...object.content);
    }
}



