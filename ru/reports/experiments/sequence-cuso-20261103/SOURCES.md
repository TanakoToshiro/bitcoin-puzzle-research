> [English](<../../../../en/reports/experiments/sequence-cuso-20261103/SOURCES.md>) · [Выбор языка](<../../../../README.md>)

> Документационная копия, 2026-11-25. [Начало](<../../../README.md>) · [Направление](<../../../topics/04-sequences-and-lattices.md>) · [Документы серии](<INDEX.md>)
> Исторические планы не являются заданием на запуск. Текущий итог — в [сводке](<../../../docs/LATEST_RESULTS.md>).

# Первичные источники и закрепление

* [cuso](https://github.com/keeganryan/cuso), commit
  fb2747d2105a8e48499bf10a3a717cf80c14d079, версия 0.4.0.
  Исполнены OptimalShiftPolys и GraphShiftPolys; исходники и SHA-256
  каждого файла закреплены в PINNED_SOURCES.json.
* [flatter](https://github.com/keeganryan/flatter), commit
  d2b8026f29b4a69e987b15d4b240f8a5053275d3.
* [msolve](https://github.com/algebraic-solving/msolve), commit
  3672113ee2c696a2ac9c637636e0f7214f500ba1.
* [Keegan Ryan, Solving Multivariate Coppersmith Problems with Known
  Moduli](https://eprint.iacr.org/2024/1577), библиографическая связь
  с методом; [публикация EUROCRYPT 2025](https://doi.org/10.1007/978-3-031-91095-1_13).
  Официальный PDF при обращении возвращал 403. Исполнение и описание
  реализации опираются на прочитанный закреплённый код cuso, а не на
  заявление о полном воспроизведении статьи.
* [Sage: MPolynomial API](https://doc.sagemath.org/html/en/reference/polynomial_rings/sage/rings/polynomial/multi_polynomial.html):
  is_generator переименован в is_gen, issue 38942.
* [Официальная установка Sage через conda](https://doc.sagemath.org/html/en/installation/conda.html),
  [официальная установка micromamba](https://mamba.readthedocs.io/en/latest/installation/micromamba-installation.html).

Сохранённые научные входы и исходные системы: SELECTED.json и
CALIBRATION_SELECTED.json. Прежние ответы: BASELINES.json.
Точные версии окружения: LINUX_ENVIRONMENT.json и conda explicit lock.
