# Project name: Shopping cart

### UML: https://drive.google.com/file/d/1IPSkrnRg-1fERM6L0g_tVeRGg4wWdmZs/view?usp=sharing

## Entities:

### Customer
```
{
    id: number(PK, autoincrement),
    name_cust: string(required, min: 4: max: 20),
    adress: string(required, min: 6, max: 20),
    email: string(required, min: 6, max: 20),
    region: string(optional, min: 4, max: 20)
}
```
### Order
```
{
    id: number(PK, autoincrement),
    nr_order: int(required),
    current_state: string(required, min: 6, max: 15),
    total_price: float(optional),
    customer_id: int(required, FK to customer.id)
}
```
### Product
```
{
    id: number(PK, autoincrement),
    name_P: string(required, min: 4, max: 20),
    price: float(required),
    description: string(optional, min: 5, max: 200),
    order_id: int(required, FK to order.id) 
}
```
### Category
```
{
    id: number(PK, autoincrement),
    name_categ: string(required, min: 5, max: 20),
    product_id: int(required, FK to product.id)

}
```
### Admin
```
{
    id: number(PK, autoincrement),
    name: string(required, min: 4: max: 20),
    email: string(required, min: 10: max: 20),
    category_id: int(required, FK to category_id)
}
```
## CRUD methods
+ Create
+ Read all entities
+ Read one entity by id
+ Update entity
+ Delete entity

## Custom endpoints:
+ Get all products by categories
+ Get all products by alfabeth
+ Find products by part of name
+ Show the product list

## User authentification:


## Working with files: