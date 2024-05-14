#!/bin/bash

docker compose -f docker-compose-test.yml -p nextjs-tree-table-demo-test up \
	--build --exit-code-from nextjs

