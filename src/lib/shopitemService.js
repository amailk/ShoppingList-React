const baseUrl = 'http://localhose:8080/shopitems'

export const loadShopitems = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}

export const createShopitem = (shopitem) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type':'application/json'
    },
    body: JSON.stringify(shopitem)
  }).then(res => res.json())
}

export const saveShopitem = (shopitem) => {
  return fetch(`${baseUrl}/${shopitem.id}`, {
    method: 'PUT',
    headers:  {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(shopitem)
  }).then(res => res.json())
}

export const destroyShopitem = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'ACCEPT': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
