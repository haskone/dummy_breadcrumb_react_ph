// Let's make the structure more
// convenient to handle

const root = {
    name: "home",
    type: "dir",
    children: [
        {
            name: "myname",
            type: "dir",
            children: [
                {
                    name: "filea.txt",
                    type: "file"
                },
                {
                    name: "fileb.txt",
                    type: "file"
                },
                {
                    name: "projects",
                    type: "dir",
                    children: [
                        {
                            name: "mysupersecretproject",
                            type: "dir",
                            children: [
                                {
                                    name: "mysupersecretfile",
                                    type: "file"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

export default root;
