import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        {
          shape: 'square',
          pagination: 'count',
          title: 'Кто мы?',
          description:
            `Lookwhiz - команда профессиональных стилистов, которая поможет тебе разобраться с гардеробом и стилем:<br />
 ⁃ понять насколько тебе подходит тот или иной образ<br />
 ⁃ оценить его и дать рекомендации<br />
 ⁃ подсказать что можно добавить или убрать<br />
 ⁃ стоит ли его покупать, если ты на примерке<br />
 ⁃ стоит ли его вообще надевать<br />
 ⁃ или ответить на любые другие вопросы под твой запрос, связанные со стилем.<br />
<br />
Lookwhiz - сервис для тех кто хочет иметь под рукой в самый нужный момент стилиста (даже целую команду стилистов), который быстро и недорого оценит образ, даст совет, ответит на вопросы, улучшит look.<br />
<br />
Узнать больше о нас можно в нашем канале <a href="https://t.me/Lookwhiz/7">@Lookwhiz</a>.`,
          button: 'Дальше',
        },
        {
          shape: 'square',
          pagination: 'count',
          title: 'Кто делает оценку? Отвечают реальные люди?',
          description:
              `Оценку делают реальные стилисты, никаких роботов.`,
          button: 'Дальше',
        },
        {
          shape: 'square',
          pagination: 'count',
          title: 'Как быстро приходит ответ стилиста?',
          description:
              `Среднее время ожидания ~3-5 мин. Время может быть увеличено в зависимости от нагрузки сервиса и кол-ва свободных стилистов онлайн, но мы обязательно ответим всем)`,
          button: 'Дальше',
        },
        {
          shape: 'square',
          pagination: 'count',
          title: 'В каком виде приходит ответ стилиста?',
          description:
              `Ответ может прийти текстом или видеосообщением. На своё усмотрение стилист может отправить дополнительные материалы в формате видео, аудио или файла.`,
          button: 'Дальше',
        },
        {
          shape: 'square',
          pagination: 'count',
          title: 'Остались вопросы или есть проблема?',
          description:
              `Напиши нам <a href="https://t.me/Lookwhiz_support">@Lookwhiz_support</a> и мы решим твой вопрос. В поддержке только реальные люди, никаких ботов.`,
          button: {
            content: 'В начало',
            to: '/',
          },
        },
      ],
    },
  ],
});
