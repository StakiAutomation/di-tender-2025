DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM "THJODSKRA") THEN
        INSERT INTO "THJODSKRA" ("kennitala", "nafn", "heimilisfang", "tegund") VALUES 
        ('1203894569', 'Jökull Þórðarson', 'Bláfjallagata 12, 105 Reykjavík', 'einstaklingur'),
        ('1010101010', 'Norðurljós Software ehf', 'Software Street 1', 'fyrirtaeki'),
        ('1111111111', 'Mús & Merki ehf.', 'Mouse Street 1', 'fyrirtaeki'),
        ('1212121212', 'VR', 'Kringlan 1', 'fyrirtaeki'),
        ('4910080160', 'Íslandsbanki hf.', 'Suðurlandsbraut 14', 'fyrirtaeki');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM "SKATTGREIDANDI") THEN
        INSERT INTO "SKATTGREIDANDI" ("kennitala", "netfang", "simanumer") VALUES
        ('1203894569', 'jokull.thordarson@email.is', '7728391');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM "STADA") THEN
        INSERT INTO "STADA" ("nafn", "kodi") VALUES
        ('Móttekið', 'MOTTEKID'),
        ('Í vinnslu', 'I_VINNSLU'),
        ('Gögn vantar', 'GOGN_VANTAR'),
        ('Afgreitt', 'AFGREITT');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM "EIGNIR_TEGUND") THEN
        INSERT INTO "EIGNIR_TEGUND" ("nafn") VALUES
        ('Innlendar fasteignir'),
        ('Bifreiðir'),
        ('Annað');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM "SKULDATEGUND") THEN
        INSERT INTO "SKULDATEGUND" ("nafn") VALUES
        ('Vaxtagjöld vegna íbúðarhúsnæðis til eigin nota'),
        ('Aðrar skuldir og vaxtagjöld');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM "EYDUBLAD") THEN
        INSERT INTO "EYDUBLAD" ("numer", "nafn") VALUES
        ('2', 'Tekjur'),
        ('4', 'Eignir'),
        ('5', 'Skuldir og vaxtagjöld');
    END IF;

    -- Tekjur

    IF NOT EXISTS (SELECT 1 FROM "REITUR_HOPUR" WHERE "numer" = '2.1') THEN
        INSERT INTO "REITUR_HOPUR" ("numer", "nafn", "eydublad_id") 
        VALUES ('2.1', 'Launatekjur og starfstengdar greiðslur', (SELECT "id" FROM "EYDUBLAD" WHERE "numer" = '2'));
    END IF;

    IF NOT EXISTS (SELECT 1 FROM "REITUR" WHERE "numer" IN ('21')) THEN
        INSERT INTO "REITUR" ("numer", "nafn", "hopur_id", "lysing") VALUES
        ('21','', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.1'), NULL);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM "REITUR_HOPUR" WHERE "numer" = '2.2') THEN
        INSERT INTO "REITUR_HOPUR" ("numer", "nafn", "eydublad_id") 
        VALUES ('2.2', 'Ökutækjastyrkur. Dagpeningar. Hlunnindi.', (SELECT "id" FROM "EYDUBLAD" WHERE "numer" = '2'));
    END IF;

    IF NOT EXISTS (SELECT 1 FROM "REITUR" WHERE "numer" IN ('22', '23', '134', '136', '135')) THEN
        INSERT INTO "REITUR" ("numer", "nafn", "hopur_id", "lysing") VALUES
        ('22', 'Ökutækjastyrkur', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.2'), NULL),
        ('23', 'Dagpeningar', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.2'), NULL),
        ('134', 'Bifreiðahlunnindi', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.2'), NULL),
        ('136', 'Húsnæðishlunnindi', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.2'), NULL),
        ('135', 'Önnur hlunnindi', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.2'), 'Önnur hlunnindi, hvaða?');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM "REITUR_HOPUR" WHERE "numer" = '2.3') THEN
        INSERT INTO "REITUR_HOPUR" ("numer", "nafn", "eydublad_id") 
        VALUES ('2.3', 'Lífeyrisgreiðslur. Greiðslur frá Tryggingastofnun. Aðrar bótagreiðslur, styrkir o.fl.', (SELECT "id" FROM "EYDUBLAD" WHERE "numer" = '2'));
    END IF;

    IF NOT EXISTS (SELECT 1 FROM "REITUR" WHERE "numer" IN ('40', '43', '140', '145', '163', '197', '131', '243')) THEN
        INSERT INTO "REITUR" ("numer", "nafn", "hopur_id", "lysing") VALUES
        ('40', 'Greiðslur frá Tryggingastofnun ríkisins', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.3'), NULL),
        ('43', 'Greiðslur úr almennum lífeyrissjóðum', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.3'), NULL),
        ('96', 'Aðrar greiðslur', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.3'), NULL),
        ('131', 'Styrkir til náms, rannsókna- og vísindastarfa', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.3'), NULL),
        ('140', 'Lífeyrisgreiðslur úr séreignarsjóðum', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.3'), NULL),
        ('145', 'Lífeyrisgreiðslur úr "sérstökum" séreignarsjóðum', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.3'), NULL),
        ('163', 'Atvinnuleysisbætur', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.3'), NULL),
        ('197', 'Félagsleg aðstoð og aðrir styrkir og bætur frá sveitarfélögum', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.3'), NULL),
        ('131', 'Starfsmenntunarsjoður BHM', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.3'), 'Styrkir til náms, rannsóknar- og vísindastarfa (heildarfjárhæð)'),
        ('243', 'Ráðstöfun/útborgun úr séreignarsj vegna íbúðarkaupa umfram skattfrjálst, sbr. kafla 2.9', (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '2.3'), NULL);
    END IF;

    -- Eignir
    IF NOT EXISTS (SELECT 1 FROM "REITUR_HOPUR" WHERE "numer" IN ('4.1', '4.2', '4.3', '4.4')) THEN
        INSERT INTO "REITUR_HOPUR" ("numer", "nafn", "eydublad_id") VALUES
        ('4.1', 'Innlendar fasteignir skv. fasteignamati', (SELECT "id" FROM "EYDUBLAD" WHERE "numer" = '4')),
        ('4.2', 'Erlendar fasteignir', (SELECT "id" FROM "EYDUBLAD" WHERE "numer" = '4')),
        ('4.3', 'Bifreiðir', (SELECT "id" FROM "EYDUBLAD" WHERE "numer" = '4')),
        ('4.4', 'Aðrar eignir áður ótaldar', (SELECT "id" FROM "EYDUBLAD" WHERE "numer" = '4'));
    END IF;

    IF NOT EXISTS (SELECT 1 FROM "REITUR" WHERE "numer" IN ('314', '326', '06', '15')) THEN
        INSERT INTO "REITUR" ("numer", "nafn", "hopur_id", "lysing") VALUES
        ('314', 'Samtals fasteignir', 
            (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '4.1'), 
            'Heildarverðmæti innlendra fasteigna'),
            
        ('326', 'Samtals erlendar fasteignir', 
            (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '4.2'), 
            'Heildarverðmæti erlendra fasteigna'),
            
        ('06', 'Samtals bifreiðaeign', 
            (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '4.3'), 
            'Heildarverðmæti bifreiða'),
            
        ('15', 'Samtals aðrar eignir', 
            (SELECT "id" FROM "REITUR_HOPUR" WHERE "numer" = '4.4'), 
            'Heildarverðmæti annarra eigna');
    END IF;

END $$;
