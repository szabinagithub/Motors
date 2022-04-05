SELECT * FROM category;
SELECT * FROM item;
SELECT * FROM itemprice;
SELECT * FROM user;
SELECT * FROM userrating;

# Create Category
  INSERT INTO category
    (id,CategoryName)
    VALUES
    (?,?);

#getcategorys
  SELECT * FROM category;

#getcategoryByName
SELECT * FROM category WHERE CategoryName = ?;

#updatecategorys
UPDATE category SET
   CategoryName = ?
WHERE id = ?;

#deletecategorys
DELETE FROM category WHERE id = ?,

#Create users
INSERT INTO user
  (firstName,lastName,gender,email,password,phoneNumber)
  VALUES
  (?,?,?,?,?,?);

#GetUserByUserEmail
SELECT * FROM user WHERE email = ?;

#GetUsers
SELECT * FROM user;

#GetUsersById
SELECT * FROM user WHERE id = ?;

#UpdateUser
UPDATE user SET
  firstName= ?, lastName = ?, gender = ?, email = ?, password = ?,phoneNumber = ?
  WHERE id = ?;

#deleteUser
DELETE FROM user WHERE id = ?;

#createUserRating
INSERT INTO userrating
  (userId,comment,rating,itemId)
  VALUES
  (?,?,?,?);

#GetUserRating
  SELECT * FROM userrating;

#getUserRatingByUserId
SELECT * FROM userrating
  WHERE userId = ?;

#getUserRatingByItemId
  SELECT * FROM userrating
    WHERE itemId = ?;

#updateUserRating
UPDATE userrating SET
  userId = ?, comment = ?, rating = ?, itemId = ?
WHERE id = ?;

#deleteUserRating
DELETE FROM userrating WHERE id = ?;

#CreateItems
INSERT INTO item
(categoryesId,itemName,image,unit,alcoholcontent,brand)
  VALUES
  (?,?,?,?,?,?);

#GetItem
SELECT * FROM item;

#GetitemsById
SELECT * FROM item
  WHERE id = ?;

#updateItems
UPDATE item set
  categoryesId = 1, itemName = 'árpád alma pálinka', Image = 'https://www.google.com/search?q=%C3%A1rp%C3%A1d+alma+p%C3%A1linka&hl=hu&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiz_4u1obb2AhWQyqQKHebKBWcQ_AUoAXoECAEQAw&biw=1920&bih=979&dpr=1#imgrc=vRdWbTfQ_OAhSM', unit = '0.5L',alcoholcontent = 40,brand = 'Árpád Pálinka'
WHERE id = 6;

#deleteItems
DELETE FROM item WHERE id = ?;

#createItemPrices
INSERT INTO itemprice
  (itemId,Date,price)
  VALUES
  (?,?,?);

#getItemPrice
SELECT * FROM itemprice;

#getItemPriceById
SELECT * FROM itemprice WHERE id = ?;

#updateItemPrices
UPDATE itemprice SET
  itemId = ?, Date = ?, price = ?
WHERE id = ?;

#deleteItemPrices
DELETE FROM itemprice WHERE id = ?;

