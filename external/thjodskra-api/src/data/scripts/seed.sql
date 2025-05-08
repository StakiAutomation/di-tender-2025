DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM "KYN") THEN
        INSERT INTO "KYN" ("nafn", "kodi") VALUES 
        ('Karl', 'KK'),
        ('Kona', 'KVK'),
        ('Kynsegin', 'KS'),
        ('Annað', 'AN');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM "TEGUND_EIGINDI") THEN
        INSERT INTO "TEGUND_EIGINDI" ("nafn", "kodi") VALUES 
        ('Einstaklingur', 'einstaklingur'),
        ('Fyrirtæki', 'fyrirtaeki');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM "HEIMILISFANG") THEN
        INSERT INTO "HEIMILISFANG" ("gotuheiti", "husnumer", "postnumer", "baejarfelag", "land", "landkodi") VALUES
        ('Bláfjallagata', '12', 105, 'Reykjavík', 'Ísland', 'IS'),
        ('Software Street', '1', 101, 'Reykjavík', 'Ísland', 'IS'),
        ('Mouse Street', '1', 101, 'Reykjavík', 'Ísland', 'IS'),
        ('Kringlan', '1', 103, 'Reykjavík', 'Ísland', 'IS'),
        ('Suðurlandsbraut', '14', 108, 'Reykjavík', 'Ísland', 'IS');
    END IF;

    -- Then insert national registry entries
    IF NOT EXISTS (SELECT 1 FROM "THJODSKRA") THEN
        INSERT INTO "THJODSKRA" ("kennitala", "nafn", "kyn_id", "heimilisfang_id", "tegund_id") VALUES
        ('1203894569', 'Jökull Þórðarson', 
            (SELECT "id" FROM "KYN" WHERE "kodi" = 'KK'), 
            (SELECT "id" FROM "HEIMILISFANG" WHERE "gotuheiti" = 'Bláfjallagata' AND "husnumer" = '12'),
            (SELECT "id" FROM "TEGUND_EIGINDI" WHERE "kodi" = 'einstaklingur')),
        ('1010101010', 'Norðurljós Software ehf', 
            (SELECT "id" FROM "KYN" WHERE "kodi" = 'AN'), 
            (SELECT "id" FROM "HEIMILISFANG" WHERE "gotuheiti" = 'Software Street' AND "husnumer" = '1'),
            (SELECT "id" FROM "TEGUND_EIGINDI" WHERE "kodi" = 'fyrirtaeki')),
        ('1111111111', 'Mús & Merki ehf.', 
            (SELECT "id" FROM "KYN" WHERE "kodi" = 'AN'), 
            (SELECT "id" FROM "HEIMILISFANG" WHERE "gotuheiti" = 'Mouse Street' AND "husnumer" = '1'),
            (SELECT "id" FROM "TEGUND_EIGINDI" WHERE "kodi" = 'fyrirtaeki')),
        ('1212121212', 'VR', 
            (SELECT "id" FROM "KYN" WHERE "kodi" = 'AN'), 
            (SELECT "id" FROM "HEIMILISFANG" WHERE "gotuheiti" = 'Kringlan' AND "husnumer" = '1'),
            (SELECT "id" FROM "TEGUND_EIGINDI" WHERE "kodi" = 'fyrirtaeki')),
        ('4910080160', 'Íslandsbanki hf.', 
            (SELECT "id" FROM "KYN" WHERE "kodi" = 'AN'), 
            (SELECT "id" FROM "HEIMILISFANG" WHERE "gotuheiti" = 'Suðurlandsbraut' AND "husnumer" = '14'),
            (SELECT "id" FROM "TEGUND_EIGINDI" WHERE "kodi" = 'fyrirtaeki'));
    END IF;

END $$;
