# Project name: Shopping cart

### UML: https://drive.google.com/file/d/1IPSkrnRg-1fERM6L0g_tVeRGg4wWdmZs/view?usp=sharing

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
