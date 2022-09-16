# Back-end

## Entidades

### Game
id
title
bannerUrl (sem CDN - Content Delivery Network)

### Ad
id
gameId
name
yearsPlaying
discord
weekDays
hourStart
hourEnd
useVoiceChannel
createdAt

### Casos de uso
- Listagem de games com contagem de anúncios
- Criação de novo anúncio
- Listagem de anúcios por game
- Buscar discord pelo ID do anúncio


## Melhorias
[ ] Validações utilizando a biblioteca zod javascript
