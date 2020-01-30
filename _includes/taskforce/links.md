<ul>
{% for link in include.links %}
    <li>
        <a class="icon-export"  href="{{ link.website }}" style="border-bottom:none"></a>
        <span style="font-weight: normal"> 
            {{ link.description }}
        </span>
    </li>
{% endfor %}
</ul>