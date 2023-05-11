## [1.0.1-next.1](https://github.com/LR56c/todo_cli/compare/v1.0.0...v1.0.1-next.1) (2023-05-11)


### Bug Fixes

* **todo-test-updater-e2e:** continue experiment try command inquirer ([6f1d456](https://github.com/LR56c/todo_cli/commit/6f1d456da3b7654a2f0f98ecda3d7bf82348051b))
* **todo-test-updater-e2e:** experiment with inquirir questions and add inquirir dependency ([44a9f6d](https://github.com/LR56c/todo_cli/commit/44a9f6d99f34596978f7f420ae5c17dd2e29b0cb))
* **todo-test-updater-e2e:** finish updater command test and add inquirer to create and delete command ([a680d0a](https://github.com/LR56c/todo_cli/commit/a680d0ac40384ecb3ac7ad95c02a5e8110725897))

# 1.0.0 (2023-05-11)


### Bug Fixes

* **folder:** refactor names ([b517153](https://github.com/LR56c/todo_cli/commit/b51715330b496f8bf5597bc2102b6f2a4387fc56))
* **infraestructure:**  process to decouple service and repository and improve tests ([40ba20d](https://github.com/LR56c/todo_cli/commit/40ba20d693f784bd52430778a8c255665f6570bf))
* **middleware:**  add process status middleware to create command ([0efa927](https://github.com/LR56c/todo_cli/commit/0efa9275ed0fa670cc84552d4214332c235d8fbe))
* **misc:** fix dependency and imports ([4cad9fc](https://github.com/LR56c/todo_cli/commit/4cad9fc2b6d58c9f1bc348b84f7681b3d5e5cd76))
* **misc:** fix imports ([812ca2a](https://github.com/LR56c/todo_cli/commit/812ca2ad64590b52b698400e980d9eb54eb61e48))
* **misc:** fix others imports ([91b07ab](https://github.com/LR56c/todo_cli/commit/91b07ab8fca141a6b5196bfccd1b86ff939d429b))
* **project:** add missing files ([d4245a3](https://github.com/LR56c/todo_cli/commit/d4245a37705e96f048fc57d6255ee886ebb58b24))
* **project:** change command library ([d7bc408](https://github.com/LR56c/todo_cli/commit/d7bc4081f353a011cb25aff8993e10b25c4bd9e3))
* **project:** fix semantic dependency ([650dfca](https://github.com/LR56c/todo_cli/commit/650dfca06fa32fb894206fd1b5bc39048e900d36))
* **shared:** add abstract value object class for equals ([943ccff](https://github.com/LR56c/todo_cli/commit/943ccffcfbb30e3256b31e3c6a8f6035f209a0da))
* **todo-cli-commander:** change command library ([5d539cd](https://github.com/LR56c/todo_cli/commit/5d539cd5fbdf140a0192c1261266092b0ec3de5f))
* **todo-cli-createCommand:** fix args in command for test ([5465c0f](https://github.com/LR56c/todo_cli/commit/5465c0fec98fb873c72947106adfca7f64921e59))
* **todo-cli-createCommand:** test parse commands ([d2f1a5f](https://github.com/LR56c/todo_cli/commit/d2f1a5f7dbfce5b65f27e17097571444baca59f2))
* **todo-test-deleteTodo-command:** delete todo command in progress ([e5a0cfc](https://github.com/LR56c/todo_cli/commit/e5a0cfcfbe8e7a16db9a74e3aec76cd2e438d577))
* **todo-test-deleteTodo-command:** fix delete todo command and mock impl again ([1560815](https://github.com/LR56c/todo_cli/commit/1560815ca6ab3a8ee1d74ae7598ec5fdabd7ae91))
* **todo-test-e2e:** add create todo test ([780f5a5](https://github.com/LR56c/todo_cli/commit/780f5a52feedd7cf3222c0e1687a4796105a0980))
* **todo-test-imports:** fix lint imports ([dbec646](https://github.com/LR56c/todo_cli/commit/dbec6468d2e532e36ab0f7fbe5a3dd7e9c1c7ec6))
* **todo-test-prepare:** fix todo mock impl ([921a4b8](https://github.com/LR56c/todo_cli/commit/921a4b81fb63b49da600cd9d59c2e750f9848a81))
* **todo-test-todoCreate-e2e:** fix todo command ([66ebde6](https://github.com/LR56c/todo_cli/commit/66ebde65d2acd764cde36530b2f1ef6528995761))
* **todo-test-todoCreatir:** add invalid todo mothers to test create todo fails ([71e91b6](https://github.com/LR56c/todo_cli/commit/71e91b6b12421979754bc1c85b1db2acef500410))
* **todo-test-todoCreator:** fix todo creator test ([c2656ac](https://github.com/LR56c/todo_cli/commit/c2656acae545871be075e4772bd4a65315d4a905))
* **todo-test-todoDelete:** add todo delete test ([eab8d4b](https://github.com/LR56c/todo_cli/commit/eab8d4b5ac5a6c50c86dfafecad0a0830202a65f))
* **todo-test-todoFinder:** add todo finds test without criteria ([7bf47f2](https://github.com/LR56c/todo_cli/commit/7bf47f278907eb7ffcf22232596ec6ea2bd3f765))
* **todo-test-todoUpdater:** add todo update test ([b36a9ad](https://github.com/LR56c/todo_cli/commit/b36a9ad0c338f9b2e02fc19d7456302b594a8ca0))
* **todo-test-updateTodo-command:** add todo update command test and fix barrel imports ([961f209](https://github.com/LR56c/todo_cli/commit/961f209dfc5d59287c896ed574b6c256f9bff4c2))
* **todo.application:** rename create todo use case ([9bf9865](https://github.com/LR56c/todo_cli/commit/9bf986588eee0a9e100ffb3f0587c1fa525fbcc7))
* **todo.createTodo:** update todo.create signature ([9f4d46f](https://github.com/LR56c/todo_cli/commit/9f4d46fa7c6941e2ad496e77820c90918da1caf7))
* **todo.domain:** add from method ([94bbeff](https://github.com/LR56c/todo_cli/commit/94bbeffdc2fa023664614ef378f3edf02d9fd0b2))
* **todo.prisma:** use todo.from in get methods ([6c17d46](https://github.com/LR56c/todo_cli/commit/6c17d46d555359e8abae03945914f7d03a6124ed))
* **todo.test.integration:** add create todo test ([f22bda4](https://github.com/LR56c/todo_cli/commit/f22bda45df00b357485b5ce7cb3c16d1c1523815))
* **todo.test:** add barrels and reorganize mock,service and mothers ([588b7d4](https://github.com/LR56c/todo_cli/commit/588b7d4ad420ce96fcb322308a6a9fad2c2fb530))
* **todo.test:** add faker date mother ([0e39d4e](https://github.com/LR56c/todo_cli/commit/0e39d4e63da1436bc5a62470388eedd7b3671ee2))
* **todo.tests:** add faker title mother ([1ffb1d6](https://github.com/LR56c/todo_cli/commit/1ffb1d6d0355ad9c7e253c20fdf07bbadb0fb3b0))
* **todo.tests:** add mock to todorepository ([f87bc41](https://github.com/LR56c/todo_cli/commit/f87bc41bdb91646a49ec0e3e7e9413ab5883c078))
* **todo.tests:** add test barrels and objects mothers, with an new value object ([8e40bb9](https://github.com/LR56c/todo_cli/commit/8e40bb998a8e7309c7bd4c0657e5eb40b59e7622))
* **todo.tests:** remove "bug" barrel ([e0624c8](https://github.com/LR56c/todo_cli/commit/e0624c840bc9846c274fb6649fc1f45a5bbeab8c))
* **todo.tests:** try test create todo use case ([685b64c](https://github.com/LR56c/todo_cli/commit/685b64c55e6111449b2fe6f207ae7b1ba673ca15))
* **todo.test:** try faker in todo object mother ([88f1079](https://github.com/LR56c/todo_cli/commit/88f107982b2cf438e77ad363b71eb0adaf8bfda7))

# 1.0.0-next.1 (2023-04-20)


### Bug Fixes

* **project:** add missing files ([d4245a3](https://github.com/LR56c/todo_cli/commit/d4245a37705e96f048fc57d6255ee886ebb58b24))
* **project:** fix semantic dependency ([650dfca](https://github.com/LR56c/todo_cli/commit/650dfca06fa32fb894206fd1b5bc39048e900d36))
