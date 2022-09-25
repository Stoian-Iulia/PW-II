# Project name: Shopping cart

### UML: https://github.com/Stoian-Iulia/PW-II/blob/main/Shoping%20cart-%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0%202.drawio.png
## Entities:

### User
```
{
    id: number(PK, autoincrement),
    adress: string(required, min: 6, max: 20),
    email: string(required, min: 6, max: 20),
    password: string(required, min 6, max: 20),
    role: string(required, min: 3, max: 20),
    cart_id: int(required, FK to cart.id)
}
```
### Cart
```
{
    id: number(PK, autoincrement),
    current_state: string(required, min: 6, max: 15),
    total_price: float(optional),
}
```
### Product
```
{
    id: number(PK, autoincrement),
    name_P: string(required, min: 4, max: 20),
    price: float(required),
    description: string(optional, min: 5, max: 200),
    category_id: int(required, FK to category.id),
    brand_id: int(required, FK to brand.id),
    cart_id: int(required, FK to cart.id)
}
```
### Category
```
{
    id: number(PK, autoincrement),
    name_categ: string(required, min: 5, max: 20),

}
```
### Brand
```
{
    id: number(PK, autoincrement),
    name_barnd: string(required, min: 4: max: 20),

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
