import root from '../data/example';

const adjustChildren = (children, originalPath) => {
    return Object.keys(children).map(name => {
        return {
            name: name,
            type: children[name].type,
            path: `${originalPath}/${name}`
        }
    });
}

const traverseData = (originalPath, path, nodes) => {
    const nameToFind = path[0];
    const restPath = path.slice(1);
    const lookingForLeaft = restPath.length == 0;

    for (let nodeName in nodes) {
        if (nodeName === nameToFind) {
            if (lookingForLeaft) {
                let node = {
                    name: nodeName,
                    type: nodes[nodeName].type
                }
                if (nodes[nodeName].type == 'dir') {
                    node.children = adjustChildren(
                        nodes[nodeName].children,
                        originalPath
                    )
                }
                return node;
            } else {
                return traverseData(
                    originalPath,
                    restPath,
                    nodes[nodeName].children
                );
            }
        }
    }
}

export const getContent = async (path) => {
    const pathParts = path.split('/');
    let result = traverseData(path, pathParts, { root: root });
    if (!result) {
        // If cannot find anything, let's move to home dir
        return await getContent('root/home');
    }
    return result;
}
