> [English](<../../../../en/reports/experiments/sx-historical-20261101/HISTORY.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/01-historical-generators.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# SX/BX — изменения сохранённых RNG-функций

Даты коммитов, не доказательства даты релиза или установки. Истории трёх путей; перемещения и ветвления требуют осторожности. Точные тела и все снимки: HISTORY.json.

## 2014-04-17T03:15:11Z — src/hd-seed.cpp

[00819fb694ae1b521931443229a41724d9b24f90](https://raw.githubusercontent.com/libbitcoin/libbitcoin-explorer/00819fb694ae1b521931443229a41724d9b24f90/src/hd-seed.cpp) — uniform

```cpp
data_chunk random_bytes(size_t size)
{
    std::random_device rd;
    std::default_random_engine engine(rd());
    std::uniform_int_distribution<uint8_t> uniform_dist(0, 255);

    data_chunk result;
    for (size_t i = 0; i < size; ++i)
        result.push_back(uniform_dist(engine));
    return result;
}
```

## 2014-05-23T20:48:39Z — src/hd-seed.cpp

[893f2c101b8a54f6855427660ba9173ca7c28c2f](https://raw.githubusercontent.com/libbitcoin/libbitcoin-explorer/893f2c101b8a54f6855427660ba9173ca7c28c2f/src/hd-seed.cpp) — uniform

```cpp
data_chunk random_bytes(size_t size)
{
    std::random_device rd;
    std::default_random_engine engine(rd());

    // std::uniform_int_distribution requires at least 16 bits on msvc builds.
    std::uniform_int_distribution<uint16_t> 
        uniform_dist(0, std::numeric_limits<uint16_t>::max());

    data_chunk result;
    for (size_t i = 0; i < size; ++i)
        result.push_back(static_cast<uint8_t>(uniform_dist(engine) >> 8));
    return result;
}
```

## 2014-05-30T10:48:41Z — src/utility/coin.cpp

[4e4ecc6f8150f793dbd7fdbe090f977025db867d](https://raw.githubusercontent.com/libbitcoin/libbitcoin-explorer/4e4ecc6f8150f793dbd7fdbe090f977025db867d/src/utility/coin.cpp) — none_or_other

## 2014-06-01T22:08:11Z — src/hd-seed.cpp

[8ac6c1f5f8988dc6efcec1bfd065296710e8e32e](https://raw.githubusercontent.com/libbitcoin/libbitcoin-explorer/8ac6c1f5f8988dc6efcec1bfd065296710e8e32e/src/hd-seed.cpp) — none_or_other

## 2014-06-01T22:08:11Z — src/utility/coin.cpp

[8ac6c1f5f8988dc6efcec1bfd065296710e8e32e](https://raw.githubusercontent.com/libbitcoin/libbitcoin-explorer/8ac6c1f5f8988dc6efcec1bfd065296710e8e32e/src/utility/coin.cpp) — uniform

```cpp
data_chunk random_fill(size_t size)
{
    std::random_device device;
    std::default_random_engine engine(device());

    std::uniform_int_distribution<min_uniform_dist_size>
        distribution(0, std::numeric_limits<min_uniform_dist_size>::max());

    data_chunk result;
    for (size_t i = 0; i < size; ++i)
        result.push_back(static_cast<uint8_t>(distribution(engine)));

    return result;
}
```

## 2014-07-22T04:29:54Z — src/utility/coin.cpp

[252b5d182f28d1ae7a872fcf6cf419df1e3288ab](https://raw.githubusercontent.com/libbitcoin/libbitcoin-explorer/252b5d182f28d1ae7a872fcf6cf419df1e3288ab/src/utility/coin.cpp) — mod255

```cpp
void random_fill(data_chunk& chunk)
{
    std::random_device random;
    std::default_random_engine engine(random());

    for (uint8_t& byte : chunk)
        byte = engine() % std::numeric_limits<uint8_t>::max();
}
```

## 2014-07-22T04:45:57Z — src/utility/coin.cpp

[f37e922fce32023565107a994aaa9c2602ad9562](https://raw.githubusercontent.com/libbitcoin/libbitcoin-explorer/f37e922fce32023565107a994aaa9c2602ad9562/src/utility/coin.cpp) — none_or_other

## 2014-07-28T18:36:28Z — src/utility/utility.cpp

[a52d2ff27469249a0ae96cd6995f978dbc5aae96](https://raw.githubusercontent.com/libbitcoin/libbitcoin-explorer/a52d2ff27469249a0ae96cd6995f978dbc5aae96/src/utility/utility.cpp) — mod255

```cpp
void random_fill(bc::data_chunk& chunk)
{
    std::random_device random;
    std::default_random_engine engine(random());

    for (uint8_t& byte: chunk)
        byte = engine() % std::numeric_limits<uint8_t>::max();
}
```

## 2014-08-06T10:32:00Z — src/utility/utility.cpp

[25181978adf19b272f178edc91384dbb656ffb2e](https://raw.githubusercontent.com/libbitcoin/libbitcoin-explorer/25181978adf19b272f178edc91384dbb656ffb2e/src/utility/utility.cpp) — mod255

```cpp
void random_fill(data_chunk& chunk)
{
    std::random_device random;
    std::default_random_engine engine(random());

    for (uint8_t& byte: chunk)
        byte = engine() % std::numeric_limits<uint8_t>::max();
}
```
