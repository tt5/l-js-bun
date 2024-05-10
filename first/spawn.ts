

const proc = Bun.spawn(["cat"], {
  stdin: "pipe",
});

proc.stdin.write("hello")
proc.stdin.flush()
proc.stdin.end()

const text = await new Response(proc.stdout).text();
console.log(text);
