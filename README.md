## docker
- `firebase`と`gcloud`のコンテナを立ち上げる
```bash
docker compose up -d
```
http://localhost:4000にアクセスして`firebase`のエミュレーターが立ち上がる

## firebase
- `firebase`コンテナ内でシェル起動
```
docker compose exec firebase bash
```
### `firebase-cli`
- firebaseにログイン
```bash
firebase login --no-localhost
```
- プロジェクト一覧を確認
```bash
firebase projects:list
```
- 使用するプロジェクトを指定
```bash
firebase use days-of-me
```
- deploy
```bash
firebase deploy --project=days-of-me --only firestore:rules
```
- logout
```bash
firebase logout
```



## gcloud
- `gcloud`コンテナ内でシェル起動
```bash
docker compose exec gcloud bash
```
### gcloud-cli
