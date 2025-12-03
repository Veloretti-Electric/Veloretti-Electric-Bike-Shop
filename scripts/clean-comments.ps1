$exts = '*.html','*.css','*.js'
Get-ChildItem -Path . -Recurse -Include $exts | ForEach-Object {
    $path = $_.FullName
    try {
        $content = Get-Content -Raw -LiteralPath $path -ErrorAction Stop
    } catch {
        Write-Output "Skip binary or unreadable: $path"
        return
    }
    $orig = $content
    $content = [regex]::Replace($content,'(?is)<!--(?![^>]*\b(?:TODO|IMPORTANT|CRUCIAL|aria|SEO|robots|canonical|license)\b).*?-->','')
    $content = [regex]::Replace($content,'(?is)/\*(?![^*]*\b(?:TODO|IMPORTANT|CRUCIAL|aria|SEO|robots|canonical|license)\b).*?\*/','')
    $content = [regex]::Replace($content,'(?im)^[ \t]*//(?!.*\b(?:TODO|IMPORTANT|CRUCIAL|aria|SEO|robots|canonical|license)\b).*?$','')
    if ($content -ne $orig) {
        Set-Content -LiteralPath $path -Value $content -Encoding UTF8
        Write-Output "Cleaned: $path"
    }
}
