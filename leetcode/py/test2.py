import asyncio


async def produce(len):
    for n in range(1, len):
        print("[PRODUCER] Producing %s..." % n)
        result = await consumer(n)
        print(f"got result from consumer {result}")


async def consumer(value):
    await asyncio.sleep(1)
    print(f"<consumer> got value from producer {value}")
    return value + value


async def main():
    await produce(6)


asyncio.run(main())
