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

}
```
### Order
```
{
    id: number(PK, autoincrement),
    user_id(FK, required)
}
```

### Basket
```
{
    id: number(PK, autoincrement),
    device_id: int(required, FK to basket.id),
    basket_id(FK, required)
}
```
### Device
```
{
    id: number(PK, autoincrement),
    name: string(required, min: 4, max: 20),
    price: float(required),
    brand_id: int(required, FK to brand.id),
    type_id: int(required, FK to type.id)
}
```
### Device_info
```
{
    id: number(PK, autoincrement),
    device_id: int(required, FK to device.id),
    title: string(required, min: 5, max: 10),
    description: string(required, min: 5, max: 30),

}
```
### Brand
```
{
    id: number(PK, autoincrement),
    name: string(required, min: 4: max: 20),

}
```

### Type
```
{
    id: number(PK, autoincrement),
    name: string(required, min: 4: max: 20),

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
