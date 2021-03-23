export const convert = (item: any) => {
  return {
    id: item.id,
    price: item.saleInfo.listPrice?.amount,
    auhtors: item.volumeInfo.authors,
    categories: item.volumeInfo.categories,
    imageLinks: item.volumeInfo.imageLinks,
    pageCount: item.volumeInfo.pageCount,
    publishedDate: item.volumeInfo.publishedDate,
    publisher: item.volumeInfo.publisher,
    title: item.volumeInfo.title,
    description: item.volumeInfo.description,
    infoLink: item.volumeInfo.infoLink,
    previewLink: item.volumeInfo.previewLink,
  }
}

export const convertList = (data: any) => {
  data.items = data.items.map(convert)
  return data;
}