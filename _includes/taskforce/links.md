<ul>
{% for link in include.links %}
    <li>
        <a class="icon-export"  href="{{ link.website }}" style="border-bottom:none"></a>
        <span style="font-weight: normal"> 
            {{ link.description }}
        </span>
    </li>
{% endfor %}
{% if include.edit_me %}
    <li>
        <a class="icon-export"  href="{{ site.improve_content }}/{{ page.path }}" style="border-bottom:none"></a>
        <span style="font-weight: normal"> 
            Task force webpage backend - for information on task force progress, links to public resources, aims, membership, status, etc.
        </span>
    </li>
{% endif %}
</ul>