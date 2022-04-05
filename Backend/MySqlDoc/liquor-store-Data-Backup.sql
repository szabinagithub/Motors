insert into category
  (id,CategoryName)
  VALUES
  (1,'Vodka'),
  (2,'Bor'),
  (3,'Sake'),
  (4,'Brandy'),
  (5,'Calvados'),
  (6,'Gyümölcspárlat'),
  (7,'Pálinka'),
  (8,'Gin'),
  (9,'keserű likőr'),
  (10,'Pezsgő'),
  (11,'Rum'),
  (12,'Tequila'),
  (13,'Sör'),
  (14,'Whiskey');
  ##'Bor','Sake','Brandy','Calvados','Gyümölcspárlat','Pálinka','Gin','keserű likőr','Pezsgő','Rum','Tequila','Sör','Vodka','Whiskey'
    DELETE FROM category WHERE id = '15';
    DELETE item FROM item;
DELETE itemprice FROM itemprice;
INSERT INTO user
  (firstName,lastName,gender,email,password,phoneNumber,permission)
  VALUES
  ('Füle','Levente','Férfi','admin@gmail.com','admin','06305596631','1');

INSERT INTO item
  (categoryesId,itemName,Image,unit,alcoholcontent,brand)
  VALUES
  (1,'árpád alma pálinka','https://www.google.com/search?q=%C3%A1rp%C3%A1d+alma+p%C3%A1linka&hl=hu&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiz_4u1obb2AhWQyqQKHebKBWcQ_AUoAXoECAEQAw&biw=1920&bih=979&dpr=1#imgrc=vRdWbTfQ_OAhSM','0.5L','40%','Árpád Pálinka'),
  (2,'kontyos édes meggybor','https://www.google.com/search?q=KONTYOS+%C3%89DES+MEGGYBOR&tbm=isch&ved=2ahUKEwjg5um1obb2AhXWuioKHTmgAfEQ2-cCegQIABAA&oq=KONTYOS+%C3%89DES+MEGGYBOR&gs_lcp=CgNpbWcQA1DpBVjpBWCYDGgAcAB4AIABZogBwQGSAQMxLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=4CknYuD2ENb1qgG5wIaIDw&bih=979&biw=1920&hl=hu#imgrc=W2xc626DFIZ8gM','0.75L','13%','Konytyos Pincészet'),
  (3,'aranypelyhes pezsgő','https://www.google.com/search?q=%C3%96STERREICH+GOLD+%2FARANYPELYHES%2F+PEZSG%C5%90&tbm=isch&ved=2ahUKEwiG78v6obb2AhVYtCoKHRFjCqMQ2-cCegQIABAA&oq=%C3%96STERREICH+GOLD+%2FARANYPELYHES%2F+PEZSG%C5%90&gs_lcp=CgNpbWcQAzIECAAQGFCPBFiPBGDICWgAcAB4AIABTogBkgGSAQEymAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=cConYob3HdjoqgGRxqmYCg&bih=979&biw=1920&hl=hu#imgrc=0ytcstDv7VWzIM','	0.2L','9.5%','Österreich Gold'),
  (4,'banana bread','https://www.google.com/search?q=BANANA+BREAD+%2F%C3%9CVEGES%2F&tbm=isch&ved=2ahUKEwiDo4rQorb2AhVU7rsIHQKKCmMQ2-cCegQIABAA&oq=BANANA+BREAD+%2F%C3%9CVEGES%2F&gs_lcp=CgNpbWcQAzoECAAQGFCtB1itB2CmDGgAcAB4AIABSogBkQGSAQEymAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=IysnYsOFL9Tc7_UPgpSqmAY&bih=979&biw=1920&hl=hu#imgrc=RPhofL0YwgpSlM','0.5L','5.2%','Eagle Brewery'),
  (5,'jägermeister','https://www.google.com/search?q=J%C3%84GERMEISTER+&tbm=isch&ved=2ahUKEwjKjaugo7b2AhXDEsAKHR-RBPEQ2-cCegQIABAA&oq=J%C3%84GERMEISTER+&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgARQzgdYzgdglgtoAHAAeACAAVeIAaABkgEBMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=zCsnYsr3BMOlgAafopKIDw&bih=979&biw=1920&hl=hu#imgrc=GWkZT3MISps4tM','0.5L','35%','Jägermeister'),
  (6,'metaxa 7*','https://www.google.com/search?q=Metaxa+7*&tbm=isch&ved=2ahUKEwiNpfv7o7b2AhXF66QKHWyQC38Q2-cCegQIABAA&oq=Metaxa+7*&gs_lcp=CgNpbWcQAzIECAAQEzIGCAAQHhATMgYIABAeEBMyCAgAEAgQHhATMgYIABAeEBMyBggAEB4QEzIGCAAQHhATMgYIABAeEBMyBggAEB4QEzIGCAAQHhATOgUIABCABDoECAAQQzoECAAQHjoGCAAQCBAeUABYiQdgiAtoAHAAeACAAWeIAagCkgEDMi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=jCwnYo2vDsXXkwXsoK74Bw&bih=979&biw=1920&hl=hu#imgrc=LURBFIZBMBzbDM','0.7L','40%','Metaxa'),
  (7,'reserve exclusiva rum','https://www.google.com/search?q=DIPLOMATICO+RESERVA+EXCLUSIVA+RUM+&tbm=isch&ved=2ahUKEwiFovb-o7b2AhUm2OAKHaLpD4UQ2-cCegQIABAA&oq=DIPLOMATICO+RESERVA+EXCLUSIVA+RUM+&gs_lcp=CgNpbWcQAzIECAAQEzIGCAAQHhATMggIABAIEB4QEzIICAAQCBAeEBM6CAgAEAcQHhATUJoCWJoCYIYHaABwAHgAgAFiiAG-AZIBATKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=kiwnYoWRG6awgwei07-oCA&bih=979&biw=1920&hl=hu#imgrc=3boEEA1Y7Ic5dM','0.7L','40%','Diplomatico'),
  (8,'Roku Gin','https://www.google.com/search?q=roku+gin&rlz=1C1GCEA_enHU951HU951&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiJj-yFoLb2AhWkTeUKHYWeAZ4Q_AUoAXoECAEQAw&biw=1920&bih=979&dpr=1#imgrc=IwOpal-lcRWl2M','0,7L','43%','Suntory');

INSERT INTO itemprice
  (itemId,Date,price)
  VALUES
  (1,'2022.03.08','7790 Ft'),
  (2,'2022.03.08','2390 Ft'),
  (3,'2022.03.08','4650 Ft'),
  (4,'2022.03.08','9990 Ft'),
  (5,'2022.03.08','6990 Ft'),
  (6,'2022.03.08','6490 Ft'),
  (7,'2022.03.08','12.690 Ft'),
  (8,'2022.03.08','10.450 Ft');
