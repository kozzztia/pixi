export const isChekingAABB = (block , hero) => {

    return (
        hero.x + hero.width > block.x && 
        hero.x < block.x + block.width &&
        hero.y + hero.height > block.y &&
        hero.y < block.y + block.height
    )
}
