export const getCategory = (frontmatter)=>{
  try {
    return frontmatter.category[0]
  } catch {
    return null
  }
}
export const getTags = (frontmatter)=>{
  try {
    return frontmatter.tags
  } catch {
    return null
  }
}

export const isLast = (arr, index)=> arr.length-1 === index
export const hypenize =(s)=>s.split(' ').join('-')