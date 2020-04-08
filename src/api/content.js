import _ from 'lodash';

import root from '../data/example';

const filterFakeChildren = (children) => {
    return children.map(i => _.pick(i, ['name', 'type']));
}

const traverseFakeData = (name, node) => {
    if (node.name === name) {
        return {
            ..._.pick(node, ['name', 'type']),
            children: filterFakeChildren(node.children)
        }
    } else {
        for (let subnode of node.children) {
            if (subnode.type === 'dir') {
                return traverseFakeData(name, subnode);
            }
        }
    }
}

// Let's say path === unique name of a node,
// yeah, maybe path/to/node woulb be better
// for this demo
export const getContent = async (path) => {
    return traverseFakeData(path, root);
}
